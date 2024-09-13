// SuggestionBasedAI.js
import React from 'react';
import { FaRobot } from 'react-icons/fa';
import { TbBulb } from 'react-icons/tb';

export const SuggestionBasedAI = ({ aiSugg, isFetching, handleClick }) => (
  <>
    <h2 id="section-heading">
      <TbBulb size={30} style={{ marginRight: "10px" }} />
      Based on your idea we suggest to use
    </h2>
    <div className="form-group" style={{ alignItems: "center" }}>
      <div className="label-flex" style={{ justifyContent: "left" }}>
        <div
          className="brand-name-sugg-card"
          onClick={handleClick}
          style={{
            borderRadius: "5px",
            fontFamily: aiSugg,
            minWidth: "300px",
            backgroundColor: "var(--bg-highlight)",
          }}
        >
          <p className="item">{aiSugg}</p>
        </div>
        <div className="right-label">
          <button
            type="button"
            className="btn"
            disabled={isFetching}
            onClick={handleClick}
          >
            {isFetching ? <div className="spinner"></div> : <>Generate One <FaRobot /></>}
          </button>
        </div>
      </div>
    </div>
  </>
);
