import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";

const Cookies = () => {
  return (
    <>
      <RegularSection>
        <Hero title="Cookie Policy for LKTRA" />
        <div className="cookies">
          <p>
            This is the Cookie Policy for LKTRA, accessible from www.lktra.lt
          </p>
          <h4>What Are Cookies</h4>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>
          <h4>How We Use Cookies</h4>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <h4>Disabling Cookies</h4>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies. This Cookies Policy was created with the help of the{" "}
            <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
              Cookies Policy Generator
            </a>
            .
          </p>
          <h4>The Cookies We Set</h4>
          <ul>
            <li>
              <p>Account related cookies</p>
              <p>
                If you create an account with us then we will use cookies for
                the management of the signup process and general administration.
                These cookies will usually be deleted when you log out however
                in some cases they may remain afterwards to remember your site
                preferences when logged out.
              </p>
            </li>
            <li>
              <p>Login related cookies</p>
              <p>
                We use cookies when you are logged in so that we can remember
                this fact. This prevents you from having to log in every single
                time you visit a new page. These cookies are typically removed
                or cleared when you log out to ensure that you can only access
                restricted features and areas when logged in.
              </p>
            </li>
            <li>
              <p>Site preferences cookies</p>
              <p>
                In order to provide you with a great experience on this site we
                provide the functionality to set your preferences for how this
                site runs when you use it. In order to remember your preferences
                we need to set cookies so that this information can be called
                whenever you interact with a page is affected by your
                preferences.
              </p>
            </li>
          </ul>
          <h4>Third Party Cookies</h4>
          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
          <ul>
            <li>
              <p>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </p>
              <p>
                For more information on Google Analytics cookies, see the
                official Google Analytics page.
              </p>
            </li>
            <li>
              <p>
                From time to time we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst
                ensuring we understand which optimisations our users appreciate
                the most.
              </p>
            </li>
            <li>
              <p>
                We also use social media buttons and/or plugins on this site
                that allow you to connect with your social network in various
                ways. For these to work the following social media sites
                including; (List the social networks whose features you have
                integrated with your site?:12), will set cookies through our
                site which may be used to enhance your profile on their site or
                contribute to the data they hold for various purposes outlined
                in their respective privacy policies.
              </p>
            </li>
          </ul>
        </div>
      </RegularSection>
    </>
  );
};

export default Cookies;
