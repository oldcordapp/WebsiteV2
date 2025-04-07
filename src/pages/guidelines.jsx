import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";
import MetaTags from "../components/metaTags.jsx";

const Guidelines = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Instance Guidelines" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Instance Guidelines</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: November 15th, 2024 | Effective: TBD
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text}>
            Welcome to Oldcord! We created Oldcord to be a safe and enjoyable
            environment where everyone can express themselves and find community
            — but not at the expense of anyone else.
          </span>
          <span className={sectionStyles.text}>
            These Guidelines explain what isn't allowed on Oldcord. Everyone on
            Oldcord must follow these rules, and they apply to all parts of our
            Instance, including your content, behaviors, and interactions.
            Please note that this only applies to our Instance; third-party
            instances might have different guidelines.
          </span>
          <span className={sectionStyles.text}>
            When we discover a violation of these Guidelines, we will take
            appropriate enforcement steps, including issuing warnings, removing
            content, or suspending/removing violative accounts.
          </span>
          <span className={sectionStyles.text}>
            If you come across content that appears to break these Guidelines,
            please report it to us.
          </span>
          <span className={sectionStyles.title}>Respect Each Other</span>
          <ol>
            <li className={sectionStyles.text}>
              Do not promote, coordinate, or engage in harassment. We do not
              allow any type of harassing behavior, including sustained
              bullying, sexual harassment, or coordinating harassment against
              other users.
            </li>
            <li className={sectionStyles.text}>
              Do not threaten to harm another individual or group of people.
              This includes direct, indirect, and suggestive threats.
            </li>
            <li className={sectionStyles.text}>
              Do not share or threaten to share personally identifiable
              information (PII) of any individual without consent. This includes
              providing services that facilitate doxxing.
            </li>
            <li className={sectionStyles.text}>
              Do not use hate speech or engage in hateful conduct. We consider
              hate speech to be any form of expression that promotes hatred or
              violence against individuals based on their protected
              characteristics.
            </li>
            <li className={sectionStyles.text}>
              Do not organize, promote, or support violent extremism. This
              includes glorifying violence, coordinating violent acts, or
              promoting conspiracy theories that could encourage violence
              against others.
            </li>
            <li className={sectionStyles.text}>
              Do not solicit, share, or distribute content that depicts or
              promotes child sexual abuse. We report such content to the
              appropriate authorities.
            </li>
            <li className={sectionStyles.text}>
              If you are under the age of 18, do not engage in any conduct that
              puts your online or physical safety at risk.
            </li>
            <li className={sectionStyles.text}>
              Do not solicit sexual content from or engage in any sexual conduct
              with anyone under the age of 18.
            </li>
            <li className={sectionStyles.text}>
              Do not make sexually explicit content available to anyone under
              the age of 18. All channels containing explicit content must be
              clearly labeled.
            </li>
            <li className={sectionStyles.text}>
              Do not share or distribute sexually explicit content of others
              without their consent. This includes the non-consensual
              distribution of intimate media.
            </li>
            <li className={sectionStyles.text}>
              Do not share content that glorifies or promotes suicide or
              self-harm.
            </li>
            <li className={sectionStyles.text}>
              Do not share real media depicting excessive violence or animal
              harm, especially with the intention to harass or shock others.
            </li>
          </ol>
          <span className={sectionStyles.title}>Respect Oldcord</span>
          <ol start="13">
            <li className={sectionStyles.text}>
              Do not send unsolicited bulk messages (spam) to others, or
              facilitate this activity.
            </li>
            <li className={sectionStyles.text}>
              Self-bots are allowed as long as they do not abuse the API.
              However, each account must be primarily associated with a human
              user.
            </li>
            <li className={sectionStyles.text}>
              Do not engage with our service in an inauthentic way. This
              includes artificially inflating user engagement.
            </li>
            <li className={sectionStyles.text}>
              Do not sell or purchase Oldcord assets, including accounts,
              usernames, or other platform assets.
            </li>
            <li className={sectionStyles.text}>
              Do not share false or misleading information that could result in
              physical or societal harm. We may remove content if we reasonably
              believe its spread could endanger public health, safety, or civic
              processes.
            </li>
            <li className={sectionStyles.text}>
              Do not misrepresent your identity on Oldcord in a deceptive or
              harmful way. This includes creating fake profiles and attempts to
              impersonate others.
            </li>
            <li className={sectionStyles.text}>
              Do not evade enforcement actions by creating new accounts or
              communities after being removed.
            </li>
            <li className={sectionStyles.text}>
              Do not engage in activities that could compromise the security of
              an account or network. This includes phishing, malware
              distribution, and denial-of-service attacks.
            </li>
            <li className={sectionStyles.text}>
              Do not use Oldcord to promote or execute financial scams.
            </li>
            <li className={sectionStyles.text}>
              Do not engage in fraudulent activities or facilitate fraud. This
              includes coordinated efforts to defraud businesses, price gouging,
              or selling counterfeit goods.
            </li>
            <li className={sectionStyles.text}>
              Do not submit false or misleading reports to Oldcord support.
            </li>
            <li className={sectionStyles.text}>
              Do not treat Oldcord developers in an inhumane way or treat them
              as "tech support".
            </li>
          </ol>
          <span className={sectionStyles.title}>Follow the Law</span>
          <ol start="25">
            <li className={sectionStyles.text}>
              Do not share content that violates anyone's intellectual property
              rights.
            </li>
            <li className={sectionStyles.text}>
              Do not organize, promote, or engage in the sale of regulated or
              dangerous goods.
            </li>
            <li className={sectionStyles.text}>
              Do not coordinate or participate in illegal gambling activities.
            </li>
            <li className={sectionStyles.text}>
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
            These Guidelines will continue to evolve over time. While we will do
            our best to notify you of any updates, it is your responsibility to
            stay informed and follow both the letter and spirit of these rules.
            We reserve the right to take action against behavior that violates
            the spirit of these Guidelines, even if not explicitly covered in
            the current version.
          </span>
          <span className={sectionStyles.title}>Ending Words</span>
          <span className={sectionStyles.text}>
            Just be a good person — treat others how you want to be treated —
            and we won't get in your way. Thank you for helping keep Oldcord a
            safe and enjoyable space for everyone.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
