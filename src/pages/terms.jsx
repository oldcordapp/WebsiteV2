import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";
import MetaTags from "../components/metaTags.jsx";

const Terms = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Terms and Conditions" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Terms and Conditions</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: November 15th, 2024 | Effective: TBD
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
            These terms set forth our legal obligations to each other. They
            apply to your use of our instance.
          </span>
          <span className={sectionStyles.text}>
            When we say "Oldcord," "we," "us," and "our" in these terms, we mean
            the team behind Oldcord.
          </span>
          <span className={sectionStyles.text}>
            When we say "instance" in these terms, we mean our hosted version of
            Oldcord.
          </span>
          <span className={sectionStyles.text}>
            When we say "you" or "your," we mean you. If you're accessing our
            instance on behalf of a legal entity (like your employer), you agree
            that you have the authority to bind that entity to these terms, and
            "you" and "your" will refer to that entity.
          </span>
          <span className={sectionStyles.text}>
            We also have a Privacy Policy, Instance Guidelines, and other
            policies that apply to your use of our instance and are incorporated
            into these terms. You should read these policies—we've worked hard
            to make them simple and clear, and they contain important
            information about your use of our instance.
          </span>
          <span className={sectionStyles.text}>
            Together, these rules make Oldcord possible, and they matter to us.
            If you believe others aren't following them, please let us know by
            reporting it to us.
          </span>
          <span className={sectionStyles.title}>Who we are</span>
          <span className={sectionStyles.text}>
            We provide an instance that allows you to interact with other
            Oldcord users (such as through direct messages) and participate in
            servers, which are digital spaces made up of different channels. Our
            instance downloads and executes older versions of your favorite
            instant messaging service directly in your browser.
          </span>
          <span className={sectionStyles.title}>
            Age Requirements and Responsibility of Parents and Legal Guardians
          </span>
          <span className={sectionStyles.text}>
            By accessing our instance, you confirm that you're at least 13 years
            old and meet the minimum age required by the laws in your country.
            If you are old enough to use our instance but not old enough to have
            authority to consent to our terms, your parent or legal guardian
            must agree to our terms on your behalf. If you're a parent or legal
            guardian, and you allow your child to use the instance, then these
            terms also apply to you and you're responsible for your child's
            activity.
          </span>
          <span className={sectionStyles.title}>
            What you can expect from us
          </span>
          <span className={sectionStyles.text}>
            Oldcord provides different digital spaces where you can connect with
            other users and communities. Users communicate primarily via
            "servers", which are digital spaces made up of different channels.
            Text channels allow users to interact via text-based messages, as
            well as images, GIFs, emoji, and other uploadable media. Voice
            channels allow users to communicate by voice.
          </span>
          <span className={sectionStyles.text}>
            Users create servers, and users choose which servers to join. All
            users must follow our Instance Guidelines and other policies, but in
            servers, the server owners and server admins control the server
            permissions and additional rules, including establishing membership
            requirements and creating custom roles and what those roles can do
            within the server.
          </span>
          <span className={sectionStyles.title}>Your Oldcord account</span>
          <span className={sectionStyles.text}>
            To access the instance, you will need to create an Oldcord account.
            You can provide a username and password, and a way of contacting you
            (such as an email address).
          </span>
          <span className={sectionStyles.text}>
            You are responsible for the security of your account, and you agree
            to notify us immediately if you believe your account has been
            compromised. If you use a password, it must be strong, and we
            (strongly) recommend that you use that password only for your
            Oldcord account.
          </span>
          <span className={sectionStyles.text}>
            You must always provide accurate information to Oldcord and maintain
            the accuracy of the information associated with your account. We may
            assume that any communications we've received from your account or
            the associated contact information have been made by you.
          </span>
          <span className={sectionStyles.text}>
            If you get locked out of your account, we'll need to contact you at
            the email associated with your account. If your account is
            compromised or you no longer have access to your email account, we
            may not be able to restore your access to your account.
          </span>
          <span className={sectionStyles.title}>Content in Our Instance</span>
          <span className={sectionStyles.subtitle}>Your Content</span>
          <span className={sectionStyles.text}>
            When we say "your content", we mean all the things you add (upload,
            post, share, etc.) to our instance. You don't have any obligation to
            add content to the instance. If you choose to add content to the
            instance, you are responsible for ensuring that you have the right
            to do so, that you have the right to grant the licenses in this
            section of these terms, and that your content is lawful. We take no
            responsibility for your content, and we are not responsible for
            others' use of your content.
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            Your content is yours, but you give us a license to it when you use
            Oldcord. Your content may be protected by certain intellectual
            property rights. We don't own those. But by using our instance, you
            grant us a license—which is a form of permission—to do the following
            with your content:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Use, copy, store, distribute, and communicate your content in
              manners consistent with your use of the instance
            </li>
            <li className={sectionStyles.text}>
              Publish, publicly perform, or publicly display your content if
              you've chosen to make it visible to others
            </li>
            <li className={sectionStyles.text}>
              Monitor, modify, translate, and reformat your content
            </li>
            <li className={sectionStyles.text}>
              Sublicense your content, to allow our instance to work as intended
            </li>
          </ul>
          <span className={sectionStyles.text}>
            This license is worldwide, non-exclusive (which means you can still
            license your content to others), royalty-free (which means there are
            no fees for this license), transferable, and perpetual.
          </span>
          <span className={sectionStyles.text}>
            We reserve the right to block, remove, and/or permanently delete
            your content if it is in breach of these terms, our Instance
            Guidelines, our other policies, or any applicable law or regulation.
          </span>
          <span className={sectionStyles.text}>
            We welcome feedback on our instance. By sending us feedback, you
            grant us a non-exclusive, perpetual, irrevocable, transferable
            license to use the feedback and ideas generated from the feedback
            without any restrictions, attribution, or compensation to you.
          </span>
          <span className={sectionStyles.subtitle}>Other content</span>
          <span className={sectionStyles.text}>
            Our instance might also provide you with access to other people's
            content. You may not use this content without that person's consent,
            or as allowed by law. Other people's content is theirs and doesn't
            necessarily reflect Oldcord's own views. We don't endorse or verify
            the accuracy or reliability of content shared by Oldcord users.
          </span>
          <span className={sectionStyles.title}>
            Restrictions on Your Use of Our Instance
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            When using our instance, you must comply with these terms and all
            applicable laws, rules, and regulations, and you must only use the
            instance for authorized and acceptable purposes. You must also
            adhere to our Instance Guidelines and other policies. Fundamentally,
            do not do, try to do, or encourage or help others to do any of the
            following:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Don't use the instance to do harm to yourself or others. Among
              other things, this includes trying to gain access to another
              user's account or any non-public portions of the instance,
              infringing anyone else's intellectual property rights or any other
              proprietary rights, exploiting, harassing, bullying, spamming,
              auto-messaging, or auto-dialing people through our instance.
            </li>
            <li className={sectionStyles.text}>
              Don't use the instance to do harm to Oldcord. Among other things,
              this includes trying to gain access to or attacking our systems,
              scraping our instance without our written consent, transmitting
              viruses or other malicious code to our instance, abusing or
              defrauding us, and misusing our reporting or customer service
              mechanisms.
            </li>
            <li className={sectionStyles.text}>
              Don't use the instance to do anything else that's illegal. This
              includes using the instance to plan or commit any crime or do
              anything else that is illegal.
            </li>
          </ul>

          <span className={sectionStyles.title}>Termination</span>
          <span className={sectionStyles.subtitle}>
            Your right to terminate
          </span>
          <span className={sectionStyles.text}>
            You're free to stop using our instance at any time and for any
            reason. To terminate this agreement, you can contact us at
            <span className={sectionStyles.bold}> contact@noia.site</span> to
            request account deletion and discontinue use of the instance.
          </span>

          <span className={sectionStyles.subtitle}>Our right to terminate</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We reserve the right to suspend or terminate your account and/or
            your access to our instance with or without notice, at our
            discretion for any reason, including:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              You breach these terms, our Instance Guidelines, our other
              policies, or additional terms
            </li>
            <li className={sectionStyles.text}>
              We're required to do so to comply with a legal requirement or
              court order
            </li>
            <li className={sectionStyles.text}>
              We reasonably believe termination is necessary to prevent harm to
              you, us, other users, or third parties
            </li>
            <li className={sectionStyles.text}>
              Continuing to allow your account creates risk for Oldcord, other
              users, or third parties
            </li>
          </ul>

          <span className={sectionStyles.title}>Appeals</span>
          <span className={sectionStyles.text}>
            We value transparency and work hard to give you context for the
            decisions we make. You can appeal any enforcement action we take
            under these terms through our available appeal channels.
          </span>

          <span className={sectionStyles.title}>Instance "AS IS"</span>
          <span className={sectionStyles.text}>
            Oldcord is still under development, so some features may be
            incomplete or have bugs. Our Instance are provided "AS IS" without
            warranties of any kind. We do not guarantee that all features will
            be available or functional. Complaining won't speed up fixes; it
            reflects poorly on you and may result in your account being banned
            without the possibility of appeal. Your use of our instance is at
            your own risk.
          </span>
          <span className={sectionStyles.text}>
            TO THE FULLEST EXTENT PERMITTED BY LAW, OLDCORD AND ITS AFFILIATES
            MAKE NO WARRANTIES, EITHER EXPRESS OR IMPLIED, ABOUT THE INSTANCE.
            WE ALSO DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, AND NON-INFRINGEMENT, AND
            ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          </span>

          <span className={sectionStyles.title}>Limitation of liability</span>
          <span className={sectionStyles.text}>
            WE DON'T EXCLUDE OR LIMIT OUR LIABILITY TO YOU WHERE IT WOULD BE
            ILLEGAL TO DO SO. IN COUNTRIES WHERE THE BELOW TYPES OF EXCLUSIONS
            AREN'T ALLOWED, WE'RE RESPONSIBLE TO YOU ONLY FOR LOSSES AND DAMAGES
            THAT ARE A REASONABLY FORESEEABLE RESULT OF OUR FAILURE TO USE
            REASONABLE CARE AND SKILL OR OUR MATERIAL BREACH OF OUR CONTRACT
            WITH YOU.
          </span>
          <span className={sectionStyles.text}>
            THE INFORMATION PRESENTED ON OR THROUGH THE INSTANCE IS MADE
            AVAILABLE SOLELY FOR INFORMATIONAL PURPOSES. WE DO NOT CONFIRM THE
            ACCURACY, COMPLETENESS, OR USEFULNESS OF THE INFORMATION. ANY
            RELIANCE YOU PLACE ON SUCH INFORMATION IS SOLELY AT YOUR OWN RISK.
          </span>

          <span className={sectionStyles.title}>More important stuff</span>
          <span className={sectionStyles.text}>
            You have certain rights that, by law, can't be limited by these
            terms, and we in no way intend to restrict those rights in these
            terms.
          </span>
          <span className={sectionStyles.text}>
            <span
              className={sectionStyles.bold} style={{ textDecoration: "underline" }}
            >
              Entire agreement.
            </span>
            {" "}These terms cover the entire agreement between you and Oldcord for
            your use of our instance.
          </span>
          <span className={sectionStyles.text}>
          <span
              className={sectionStyles.bold} style={{ textDecoration: "underline" }}
            >
              Additional terms.
            </span>
            {" "}Where additional terms apply to our instance, the
            additional terms will control with respect to your use of that
            feature to the extent of any conflict with these terms.
          </span>
          <span className={sectionStyles.text}>
          <span
              className={sectionStyles.bold} style={{ textDecoration: "underline" }}
            >
              Bug reporting.
            </span>
            {" "}We support the responsible reporting of security
            vulnerabilities. To report a security issue, please contact us at
            <span className={sectionStyles.bold}> contact@noia.site</span>.
          </span>

          <span className={sectionStyles.title}>Updates to these terms</span>
          <span className={sectionStyles.text}>
            We may decide to update these terms: (1) to reflect changes to our
            instance or our business, (2) for legal or regulatory reasons, (3)
            to prevent abuse on or of our instance, or (4) to better protect or
            serve users of our instance. If these changes materially affect your
            Oldcord use or your legal rights, we'll give you reasonable advance
            notice (unless the updates are urgent). If you continue to use our
            instance after the changes have taken effect, it means that you
            agree to the changes. If you don't agree, you must stop using our
            instance.
          </span>

          <span className={sectionStyles.title}>Contacting each other</span>
          <span className={sectionStyles.text}>
            If you have any questions about these terms, please contact us at
            <span className={sectionStyles.bold}> contact@noia.site</span>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
