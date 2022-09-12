import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./index.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.groupDiv}>
        <div
          className={styles.watchToEarnIsHereMakeMo}
        >{`Watch-to-earn is here. Make money while having fun. `}</div>
        <div className={styles.earnByWatchingAndHelpingT}>
          Earn by watching and helping to grow your favourite creators.
        </div>
      </div>
      <div className={styles.maskGroupDiv}>
        <div className={styles.image283Div} />
      </div>
      <div className={styles.maskGroupDiv1}>
        <div className={styles.image283Div1} />
      </div>
      <div className={styles.maskGroupDiv2}>
        <div className={styles.image283Div2} />
      </div>
      <div className={styles.maskGroupDiv3}>
        <div className={styles.image283Div3} />
      </div>
      <div className={styles.creatorsDiv}>130 creators</div>
      <div className={styles.hoursDiv}>200 hours</div>
      <div className={styles.kmDiv}>100,000 km</div>
      <div className={styles.inWaitlistDiv}>in waitlist</div>
      <div className={styles.hoursInLiveStreams}>hours in live streams</div>
      <div className={styles.overDiv}>Over</div>
      <div className={styles.virtuallyTravelledDiv}>Virtually travelled</div>
      <div className={styles.kmDiv1}>100,000 km</div>
      <div className={styles.overDiv1}>Over</div>
      <div className={styles.virtuallyTravelledDiv1}>Virtually travelled</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.vIRALLOOPSHEREDiv}>VIRALLOOPS HERE</div>
      <div className={styles.whitepaperTeamContact}>
        Whitepaper | Team | Contact
      </div>
      <img className={styles.groupIcon} alt="" src="../group-2.svg" />
    </div>
  );
};

export default FrameComponent;
