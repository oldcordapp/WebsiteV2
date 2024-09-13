import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";

import MetaTags from "../components/metaTags.js";

const Terms = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Terms and Conditions" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Terms and Conditions</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: September 13th, 2024 | Effective: (Not Decided Yet)
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text}>
            Welcome! Oldcord is the best place to experience what your favorite
            instant messaging service looked like in the past. We're happy
            you're here.
          </span>
          <span className={sectionStyles.text}>
            These terms set forth our legal obligations to each other and apply
            to your use of our Instance.
          </span>
          <span className={sectionStyles.subtitle}>Definitions</span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>"We," "Us," and "Our"</span>{" "}
              refers to Oldcord.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>"Instance"</span> refers to
              our hosted version of Oldcord.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>"You" and "Your"</span>{" "}
              refers to the user of our Instance.
            </li>
          </ul>
          <span className={sectionStyles.title}>
            Age Requirements and Responsibility of Parents and Legal Guardians
          </span>
          <span className={sectionStyles.text}>
            By accessing our Instance, you confirm that you are at least 13
            years old and meet the minimum age required by the laws in your
            country. If you are old enough to use our Instance but not old
            enough to consent to our terms, your parent or legal guardian must
            agree to our terms on your behalf. If you're a parent or guardian
            allowing your child to use the Instance, these terms also apply to
            you, and you're responsible for your child's activity.
          </span>
          <span className={sectionStyles.title}>Content in Our Instance</span>
          <span className={sectionStyles.subtitle}>Your Content</span>
          <span className={sectionStyles.text}>
            When we say "your content," we mean all the things you add (upload,
            post, share, etc.) to our Instance. You are responsible for ensuring
            you have the right to do so and that your content is lawful. We take
            no responsibility for your content or others' use of it.
          </span>
          <span className={sectionStyles.subtitle}>Other Content</span>
          <span className={sectionStyles.text}>
            Our Instance may also provide access to other users' content. You
            may not use this content without the person's consent. We do not
            endorse or verify the accuracy or reliability of content shared by
            users.
          </span>
          <span className={sectionStyles.title}>
            Restrictions on Your Use of Our Instance
          </span>
          <span className={sectionStyles.text}>
            When using our Instance, you must comply with these terms and our
            Instance Guidelines. You agree not to:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Use our Instance for illegal discussions or content, including but
              not limited to CSAM.
            </li>
            <li className={sectionStyles.text}>
              Engage in hate speech or harassment.
            </li>
            <li className={sectionStyles.text}>
              Dox individuals or distribute such content.
            </li>
            <li className={sectionStyles.text}>
              Claim responsibility for creating or maintaining our Instance
              unless you are a contributor to the public repository.
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Violating these conditions may result in the suspension of your
            services on our Instance.
          </span>
          <span className={sectionStyles.title}>Law Enforcement</span>
          <span className={sectionStyles.text}>
            We will work with law enforcement{" "}
            <span className={sectionStyles.bold}>only if</span> we find illegal
            discussions or content, including but not limited to CSAM, or if
            they provide us with a proper search warrant. We will not willingly
            provide any backdoors or access to federal authorities. If we
            receive a search warrant, we will notify everyone on our Instance.
          </span>
          <span className={sectionStyles.title}>Termination</span>
          <span className={sectionStyles.text}>
            We reserve the right to terminate anyone from our Instance when we
            find any valid reason, such as causing disturbances to our community
            or ruining the atmosphere. We may terminate your account and/or
            access to our Instance if you violate these terms or engage in
            behavior that creates risk for our platform.
          </span>
          <span className={sectionStyles.title}>Appeals</span>
          <span className={sectionStyles.text}>
            We value transparency and allow you to appeal any enforcement action
            we take under these terms. Appeals can be submitted through our
            designated channels.
          </span>
          <span className={sectionStyles.title}>Instance "AS IS"</span>
          <span className={sectionStyles.text}>
            Oldcord is still under development, so some features may be
            incomplete or have bugs. Our Instance are provided "AS IS" without
            warranties of any kind. We do not guarantee that all features will
            be available or functional. Complaining won't speed up fixes; it
            reflects poorly on you and may result in your account being banned
            without the possibility of appeal. Your use of our service is at
            your own risk.
          </span>
          <span className={sectionStyles.title}>More Important Stuff</span>
          <span className={sectionStyles.text}>
            You have certain rights that, by law, can't be limited by these
            terms, and we in no way intend to restrict those rights. These terms
            cover the entire agreement between you and Oldcord for your use of
            our Instance. We may update these terms to reflect changes to our
            Instance or for legal reasons. If you continue to use our Instance
            after the changes have taken effect, you agree to the changes.
          </span>
          <hr />
          <span className={sectionStyles.text}>
            For any questions about these terms or to contact us regarding law
            enforcement matters, please reach out to
            <span className={sectionStyles.bold}> contact@noia.site</span>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
