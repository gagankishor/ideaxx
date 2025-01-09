// import { userToken } from "../config/Auth";

// import { px } from "framer-motion";

export const EnterpriseLaunch = () => {
  return (
    <div className="enterprise-launch" id="section-haing" style={{display:'flex' ,flexWrap:'wrap', margin:'50px'}} >
      <div className="text-card" >
        <h2 id="section-heaqding" >Take a rest, we will do it for you</h2>
      </div>
      <img src="https://static.vecteezy.com/system/resources/previews/034/621/871/large_2x/vip-glyph-icon-vector.jpg"  style={{width:'50px', marginLeft:'10px',marginRight:'10px'}} alt="ent" />
      <button className="btn">
        Enterprise Launch
        </button>
    </div>
  );
};