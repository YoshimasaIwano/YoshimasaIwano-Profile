/* import libraries */
import { useRef } from 'react';
import { motion } from 'framer-motion';

/* import images */
import backgroundPurpose from '../../assets/graduation-research-img/background-purpose.png';
import dataDistribution from '../../assets/graduation-research-img/dataDistribution.png';
import tumorSizeDistribution from '../../assets/graduation-research-img/tumorSizeDistribution.png';
import HUDistribution from '../../assets/graduation-research-img/HUDistribution.png';
import ensemble from '../../assets/graduation-research-img/ensemble.png';

/*
    Graduation Research Detail Component  
*/

type ToolProps = {
  name: string;
  description: string;
};

const PytorchProps: ToolProps = {
  name: 'Pytorch',
  description:
    'Pytorch is an open source machine learning framework that accelerates the path from research prototyping to production deployment. It is used for model and dataload.'
};

const NumpyProps: ToolProps = {
  name: 'Numpy',
  description:
    'Numpy is the fundamental package for scientific computing with Python. It is used for handling data.'
};

const PandasProps: ToolProps = {
  name: 'Pandas',
  description:
    'Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language. It is used for creating a data frame.'
};

const ScikitLearnProps: ToolProps = {
  name: 'Scikit-Learn',
  description:
    'Scikit-Learn is an open source and commercialy usable built on Numpy, Scipy, and Matplotlib, and is simple and efficient tools for predictive data analysis. It is used for mainly SVM '
};

const MatplotlibProps: ToolProps = {
  name: 'Matplotlib',
  description:
    'Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. Is is used for ploting a graph'
};

const GitProps: ToolProps = {
  name: 'Git',
  description:
    'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficient. It is used for tracking changes in code.'
};

const toolList: Array<ToolProps> = [
  PytorchProps,
  NumpyProps,
  PandasProps,
  ScikitLearnProps,
  MatplotlibProps,
  GitProps
];

function ToolContent({ name, description }: ToolProps): JSX.Element {
  return (
    <div className="dt-row f4 f6-ns">
      <div className="dtc pv1 w-30 bb br b--white-50">{name}</div>
      <div className="tl dtc pv1 ph2 w-70 bb b--white-50">{description}</div>
    </div>
  );
}

/*
    This function creates Graduation Research detail page with a motion animation
    and has a scroll reference table
*/
export function GraduationResearch() {
  const purposeRef = useRef<null | HTMLDivElement>(null);
  const dataRef = useRef<null | HTMLDivElement>(null);
  const methodRef = useRef<null | HTMLDivElement>(null);
  const toolsRef = useRef<null | HTMLDivElement>(null);
  const resultsRef = useRef<null | HTMLDivElement>(null);
  const difficulitiesRef = useRef<null | HTMLDivElement>(null);
  const scrollToPurpose = () =>
    purposeRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToData = () =>
    dataRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToMethod = () =>
    methodRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToTools = () =>
    toolsRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToResults = () =>
    resultsRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToDifficulities = () =>
    difficulitiesRef.current?.scrollIntoView({
      behavior: 'smooth'
    });

  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.5
      }}
    >
      <div className="tl f2 f4-ns b ml1 mv1">Graduation Research</div>
      <div className="db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-70 w-100-ns">
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToPurpose}
        >
          ・Purpose & Background
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToData}
        >
          ・Data & Preprocessing
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToMethod}
        >
          ・Method
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToTools}
        >
          ・Tools
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToResults}
        >
          ・Results
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToDifficulities}
        >
          ・Difficulties
        </button>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={purposeRef}>
        Purpose & Background
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          There are two types of a residual tumor; teratoma and necrotic tissue.
          Teratoma is malignant and needs to be excised. However, necrotic
          tissue is benign and a surgery is an overtreatment. In addition, The
          conventional biomarker can not identify the teratoma before a surgery.
          Therefore, we aimed to predict the pathology of postchemotherapy
          residual tumors using CNN and SVM.
        </p>
        <img
          src={backgroundPurpose}
          alt="bacground and purpose"
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns"
        ></img>
        <p className="tl mh2 mv2 f3 f5-ns">
          I found two previous studies on the exact same topic.
          <a
            className="no-underline b black hover-light-yellow"
            href="https://ascopubs.org/doi/full/10.1200/CCI.18.00004"
          >
            {' '}
            The one{' '}
          </a>
          is published by Jeremy Lewin, etc. They used SVM and got accuracy:
          72.0%, sensitivity: 56.2%, specificity: 81.9% <br />
          <a
            className="no-underline b black hover-light-yellow"
            href="https://link.springer.com/article/10.1007/s00330-019-06495-z?wt_mc=Internal.Event.1.SEM.ArticleAuthorOnlineFirst&utm_source=ArticleAuthorOnlineFirst&utm_medium=email&utm_content=AA_en_06082018&ArticleAuthorOnlineFirst_20191212"
          >
            {' '}
            The another one{' '}
          </a>
          is published by Bettina Baessler, etc. They used Gradient-boosted
          trees and got accuracy: 81%, sensitivity: 89%, specificity: 72% <br />
          The purpose of my research is to get a similar or better result of
          them by ensembling CNN and SVM.
        </p>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={dataRef}>
        Data & Preprocessing
      </div>
      <div className="db ma flex-row tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          We collected CT images of 66 patients from 2005 to 2019.
          <br />
          The total number of ROI (Region of Interst) is 155 and the proportion
          of necrosis and teratoma is shown in the following image.
        </p>
        <img
          src={dataDistribution}
          alt="data distribution"
          className="db ma mv3 w-30 h-30 w-50-ns h-50-ns"
        ></img>
        <p className="tl mh2 mv2 f3 f5-ns">
          Firstly, the size of images is not constant, so we need to resize or
          clip images to apply them to Resnet. We decided to clip an image with
          100 × 100 by the analysis of tunor size.
        </p>
        <img
          src={tumorSizeDistribution}
          alt="tumor size distribution"
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns"
        ></img>
        <p className="tl mh2 mv2 f3 f5-ns">
          Secondly, the range of intensity in images is so wide that images are
          unclear.
          <br />
          Therefore, we transformed images in the range of [-150, 150] to cover
          the impoertant information in images.
        </p>
        <img
          src={HUDistribution}
          alt="HU distribution"
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns"
        ></img>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={methodRef}>
        Method
      </div>
      <div className="db ma flex-row tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          We used ensemble model consisting of 3 of SVMs, finetuned Resnet50,
          and Resnet152.
          <br />
          First of all, we extract 4608 features from Resnets and get 478
          featrues after PCA. After that, we pour them into SVMs. Finally, we
          ensemble the predictions from 5 models using majority decision.
        </p>
        <img
          src={ensemble}
          alt="ensemble"
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns"
        ></img>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={toolsRef}>
        Tools
      </div>
      <div className="dt ma flex-row tc w-80">
        {toolList.map((tool) => {
          return (
            <ToolContent
              name={tool.name}
              description={tool.description}
              key={tool.name}
            />
          );
        })}
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={resultsRef}>
        Results
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          We got a similar result as previous studies; accuracy is 78.3%,
          sensitivity is 61.3%, and specificity is 90.6%, which improved
          comparing to a single Resnet model.
        </p>
        <p className="tl mh2 mv2 f3 f5-ns">
          The paper was published on The Institute of Electronics, Information
          and Communication Engineers (IEICE) · Jul 9, 2021
          <br />
          <a
            className="no-underline b white hover-light-yellow"
            href="https://www.ieice.org/ken/paper/20210709VCen/eng/"
          >
            Here is a link.
          </a>
        </p>
      </div>
      <div
        className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80"
        ref={difficulitiesRef}
      >
        Difficulties
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          ・Lack of CT images: <br />
          &ensp; Testicular cancer is so rare cancer that we can not collect
          enough data to train a huge CNN model, so we utilize the technique
          called fine-tunig that uses pre-trained parameters from the model
          trained with ImageNet.
          <br />
          ・Variety of tumor size: <br />
          &ensp; There are small tumors and big tumors. It is difficult to make
          tumor images consistent. To deal with this problem, I clipeed all
          images with 150×150 to cover almost all tumor images.
        </p>
        <p className="tl mh2 mv2 f3 f5-ns">
          There's stiil room for investing these two difficulities, so the next
          research topic is to find better algorithm for these two problems.
        </p>
      </div>
    </motion.div>
  );
}
