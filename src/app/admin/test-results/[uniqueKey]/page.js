'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { RestAPI } from '@/config/Api';
import { Clock, DollarSign, Target } from 'lucide-react';
import { useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import PropTypes from 'prop-types';

// Separate components for better organization
const ScoreBar = ({ score, label }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium">{label}</span>
      <span className="text-blue-600 font-semibold">{score.toFixed(1)}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }}
      ></div>
    </div>
  </div>
);

const MetricCard = ({ icon: Icon, title, value, subtitle }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6 text-blue-500" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
    </CardContent>
  </Card>
);

const LoadingSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-32 w-full" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map(i => (
        <Skeleton key={i} className="h-24 w-full" />
      ))}
    </div>
    <Skeleton className="h-64 w-full" />
  </div>
);
ScoreBar.propTypes = {
    score: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

MetricCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    subtitle: PropTypes.string,
};

LoadingSkeleton.propTypes = {};
const IdeaDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { uniqueKey } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${RestAPI}/admin/wizard-results/${uniqueKey}`);
        // Parse JSON strings once during data fetch
        const rawData = response.data;
        const processedData = {
          ...rawData,
          ExpectedROIData: rawData.ExpectedROIData ? JSON.parse(rawData.ExpectedROIData) : {},
          MarketShareData: rawData.MarketShareData ? JSON.parse(rawData.MarketShareData) : {},
          TimeToMarketData: rawData.TimeToMarketData || { totalTTM: 'N/A', evaluationResult: '' },
          textForTipData: rawData.textForTipData || []
        };
        setData(processedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    if (uniqueKey) {
      fetchData();
    }
  }, [uniqueKey]);

  if (loading) return <LoadingSkeleton />;
  if (error) return <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>;
  if (!data) return <Alert><AlertDescription>No data available</AlertDescription></Alert>;

  const scores = [
    {
      label: 'Unique Value Proposition',
      score: data?.UniqueValuePropositionData?.finalScore ? parseFloat(data.UniqueValuePropositionData.finalScore) : 0,
    },
    {
      label: 'Revenue Model',
      score: data?.RevenueModelData?.finalScore ? parseFloat(data.RevenueModelData.finalScore) : 0,
    },
    {
      label: 'Competitive Landscape',
      score: data?.CompetitiveLandscapeData?.finalScore ? parseFloat(data.CompetitiveLandscapeData.finalScore) : 0,
    },
    {
      label: 'Market Potential',
      score: data?.marketPotential || 0,
    },
    {
      label: 'Team Resources',
      score: data?.TeamAndResourcesData || 0,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {data.idea_description || 'Untitled Project'}
              </h1>
              <p className="text-gray-600 mt-2">
                Project Type: {data.project_type || 'Not specified'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">
                {data?.success_percentage || 0}%
              </div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          icon={Clock}
          title="Time to Market"
          value={data.TimeToMarketData.totalTTM}
        />
        <MetricCard
          icon={DollarSign}
          title="Expected ROI"
          value={data.ExpectedROIData.expectedROI}
          subtitle={`in ${data.ExpectedROIData.timeFrame}`}
        />
        <MetricCard
          icon={Target}
          title="Market Share"
          value={data.MarketShareData.chosenOutcome}
        />
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scores.map((item, index) => (
              <ScoreBar
                key={index}
                label={item.label}
                score={item.score}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.textForTipData.map((tip, index) => (
              <div key={index} className="border p-4 rounded-lg hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Unique Value Proposition",
            content: data.UniqueValuePropositionData?.evaluatioResult
          },
          {
            title: "Revenue Model Analysis",
            content: data.RevenueModelData?.evaluatioResult
          },
          {
            title: "Competitive Analysis",
            content: data.CompetitiveLandscapeData?.evaluatioResult
          }
        ].map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line text-gray-600">
                {section.content || 'No data available'}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.TimeToMarketData.evaluationResult
              .split(/\d+\./)
              .filter(Boolean)
              .map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{phase.trim()}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdeaDashboard;