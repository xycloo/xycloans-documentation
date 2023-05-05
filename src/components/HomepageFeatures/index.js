import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const DescriptionText = `XycLoans is a flash loans protocol implemented for the Soroban Virtual Machine. Thanks to the help of the Stellar Community Fund award we're proceeding restlessy with the development. Check us out on Twitter and Github to monitor the development.`

function MainTextDescription({description} ) {
    return (
	<div className="text--center padding-horiz--md">
	    <p>{description}</p>
	</div>
    );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
	<div className="container">
	    <MainTextDescription {...{description: DescriptionText}}/>
      </div>
    </section>
  );
}

/*
  
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          </div>
	  -->
      </div>

*/
