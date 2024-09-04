import styles from "./legal.module.css";

import MetaTags from '../components/metaTags.js';

const Terms = () => {
  return (
    <div>
      <MetaTags title="Oldcord - Terms & Conditions"/>
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Terms and Conditions</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: September 3rd, 2024 | Effective: September 3rd, 2024
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles["section-content"]}>
          <span className={styles.title}>Introduction</span>
          <span className={styles.text}>
            Welcome! Oldcord is the best place to experience what your favourite
            instant messaging service looked like in the past. We’re happy
            you’re here.
          </span>
          <span className={styles.text}>
            These terms set forth our legal obligations to each other and apply
            to your use of our services.
          </span>
          <span className={styles.subtitle}>Definitions</span>
          <ul>
            <li className={styles.text}>
              <span className={styles.bold}>"We," "Us," and "Our"</span> refers
              to Oldcord.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>"Code"</span> refers to the
              open-source code of Oldcord, licensed under GPL 3.0.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>"Instance"</span> refers to our
              hosted version of Oldcord.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>"Services"</span> refers to both the
              Code and the Instance.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>"You" and "Your"</span> refers to
              the user of our Services.
            </li>
          </ul>
          <span className={styles.title}>
            Age Requirements and Responsibility of Parents and Legal Guardians
          </span>
          <span className={styles.text}>
            By accessing our instance, you confirm that you’re at least 13 years
            old and meet the minimum age required by the laws in your country.
            If you are old enough to use our instance but not old enough to
            consent to our terms, your parent or legal guardian must agree to
            our terms on your behalf. If you’re a parent or guardian allowing
            your child to use the instance, these terms also apply to you, and
            you’re responsible for your child’s activity.
          </span>
          <span className={styles.title}>Content in Our Instance</span>
          <span className={styles.subtitle}>Your Content</span>
          <span className={styles.text}>
            When we say "your content," we mean all the things you add (upload,
            post, share, etc.) to our instance. You are responsible for ensuring
            you have the right to do so and that your content is lawful. We take
            no responsibility for your content or others' use of it.
          </span>
          <span className={styles.subtitle}>Other Content</span>
          <span className={styles.text}>
            Our instance may also provide access to other users’ content. You
            may not use this content without the person’s consent. We do not
            endorse or verify the accuracy or reliability of content shared by
            users.
          </span>
          <span className={styles.title}>
            Restrictions on Your Use of Our Instance
          </span>
          <span className={styles.text}>
            When using our instance, you must comply with these terms and our
            Instance Guidelines. You agree not to:
          </span>
          <ul>
            <li className={styles.text}>
              Use our instance for illegal discussions or content, including but
              not limited to CSAM.
            </li>
            <li className={styles.text}>
              Engage in hate speech or harassment.
            </li>
            <li className={styles.text}>
              Dox individuals or distribute such content.
            </li>
            <li className={styles.text}>
              Claim responsibility for creating or maintaining our services
              unless you are a contributor to the public repository.
            </li>
          </ul>
          <span className={styles.text}>
            Violating these conditions may result in the suspension of your
            services on our instance.
          </span>
          <span className={styles.title}>Termination</span>
          <span className={styles.text}>
            We reserve the right to suspend or terminate your account and/or
            access to our instance if you violate these terms or engage in
            behavior that creates risk for our platform.
          </span>
          <span className={styles.title}>Appeals</span>
          <span className={styles.text}>
            We value transparency and allow you to appeal any enforcement action
            we take under these terms. Appeals can be submitted through our
            designated channels.
          </span>
          <span className={styles.title}>Instance/Code "AS IS"</span>
          <span className={styles.text}>
            Oldcord is still under development, so some features may be
            incomplete or have bugs. Our services are provided "AS IS" without
            warranties of any kind. We do not guarantee that all features will
            be available or functional. Complaining won’t speed up fixes; it
            reflects poorly on you and may result in your account being banned
            without the possibility of appeal. Your use of our service is at
            your own risk. By using our code, you agree to the terms of the GPL
            3.0 license.
          </span>
          <span className={styles.title}>More Important Stuff</span>
          <span className={styles.text}>
            You have certain rights that, by law, can’t be limited by these
            terms, and we in no way intend to restrict those rights. These terms
            cover the entire agreement between you and Oldcord for your use of
            our services. We may update these terms to reflect changes to our
            services or for legal reasons. If you continue to use our services
            after the changes have taken effect, you agree to the changes.
          </span>
          <hr />
          <span className={styles.text}>
            For any questions about these terms, please contact us at
            <span className={styles.bold}> contact@noia.site</span>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
