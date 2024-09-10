import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";

import MetaTags from '../components/metaTags.js';

const Guidelines = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Instance Guidelines"/>
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Instance Guidelines</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: September 3rd, 2024 | Effective: September 3rd, 2024
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text}>
            Welcome to Oldcord! We strive to create a safe and enjoyable
            environment for all users. These Instance Guidelines outline what is
            not allowed on our instance. Everyone must adhere to these rules,
            which apply to all parts of Oldcord, including your content,
            behaviors, and interactions.
          </span>
          <span className={sectionStyles.text}>
            This only applies to our instance. Third-party instances might have
            different guidelines.
          </span>
          <span className={sectionStyles.title}>Respect Each Other</span>
          <ol>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Harassment</span>
              <br />
              Do not promote, coordinate, or engage in harassment. This includes
              sustained bullying, sexual harassment, or doxxing individuals.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Threats</span>
              <br />
              Do not threaten to harm another individual or group of people.
              This includes direct, indirect, and suggestive threats.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Doxxing</span>
              <br />
              Do not share or threaten to share personally identifiable
              information (PII) of any individual without consent, including the
              facilitation of doxxing.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Hate Speech</span>
              <br />
              Hate speech and hateful conduct are not permitted. This includes
              any form of expression that promotes hatred or violence against
              individuals based on their protected characteristics.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Violent Extremism</span>
              <br />
              Do not organize, promote, or support violent extremism. This
              includes glorifying violence or coordinating violent acts.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Child Safety</span>
              <br />
              Do not solicit, share, or distribute content that depicts or
              promotes child sexual abuse. We report such content to the
              appropriate authorities.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Underage Conduct</span>
              <br />
              If you are under the age of 18, do not engage in any conduct that
              puts your online or physical safety at risk.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Sexual Conduct with Minors</span>
              <br />
              Do not solicit sexual content from or engage in any sexual conduct
              with anyone under the age of 18.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Explicit Content</span>
              <br />
              Do not make sexually explicit content available to anyone under
              the age of 18. All channels containing explicit content must be
              clearly labeled.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Non-Consensual Media</span>
              <br />
              Do not share or distribute sexually explicit content of others
              without their consent.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Self-Harm</span>
              <br />
              Do not share content that glorifies or promotes self-harm or
              suicide.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Graphic Content</span>
              <br />
              Do not share real media depicting excessive violence or animal
              harm.
            </li>
          </ol>
          <span className={sectionStyles.title}>Respect Oldcord</span>
          <ol start="13">
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Spam</span>
              <br />
              Do not send unsolicited bulk messages or spam others, or
              facilitate this activity.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Self-Bots</span>
              <br />
              Self-bots are allowed as long as they do not abuse the API.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Inauthentic Engagement</span>
              <br />
              Do not engage with our service in a deceptive manner, including
              artificially inflating user engagement.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Asset Manipulation</span>
              <br />
              Do not sell or purchase Oldcord accounts, usernames, or other
              assets.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Misinformation</span>
              <br />
              Do not share false or misleading information that could result in
              harm.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Identity Misrepresentation</span>
              <br />
              Do not misrepresent your identity in a deceptive or harmful way.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Evading Enforcement</span>
              <br />
              Do not evade enforcement actions by creating new accounts or
              communities after being removed.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Security Compromise</span>
              <br />
              Do not engage in activities that could compromise the security of
              an account or network.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Financial Scams</span>
              <br />
              Do not use Oldcord for promoting or executing financial scams.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Fraudulent Activities</span>
              <br />
              Do not engage in fraudulent activities or facilitate fraud.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>False Reports</span>
              <br />
              Do not submit false or misleading reports to Oldcord support.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Treating Oldcord developers</span>
              <br />
              Do not treat Oldcord developers in an inhumane way, nor treat them
              as "tech support".
            </li>
          </ol>
          <span className={sectionStyles.title}>Follow the law</span>
          <ol start="25">
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Intellectual Property</span>
              <br />
              Do not share content that violates anyone's intellectual property
              rights.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Illegal Goods</span>
              <br />
              Do not organize, promote, or engage in the sale of regulated or
              dangerous goods.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Illegal Gambling</span>
              <br />
              Do not coordinate or participate in illegal gambling activities.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Illegal Activities</span>
              <br />
              Do not engage in any other illegal activities, such as human
              trafficking or solicitation.
            </li>
          </ol>
          <span className={sectionStyles.title}>Reporting Violations</span>
          <span className={sectionStyles.text}>
            If you see any content or activity that violates these Guidelines,
            please report it to us. We take violations seriously and will take
            appropriate action.
          </span>
          <span className={sectionStyles.title}>Evolution of Guidelines</span>
          <span className={sectionStyles.text}>
            These Guidelines may evolve over time. We will do our best to notify
            you of any updates, but it is your responsibility to adhere to the
            spirit of these rules and help keep Oldcord a safe and enjoyable
            space for everyone. Thank you for your cooperation!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
