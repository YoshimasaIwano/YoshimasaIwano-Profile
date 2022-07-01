import BackgroundPurpose from '../../assets/graduation-research-img/background-purpose.png';
import Ensemble from '../../assets/graduation-research-img/ensemble.png';
import { Link } from 'react-scroll';

/*
    Graduation Research Detail Component  
*/

export function GraduationResearch() {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>Graduation Research</div>
            <ul>
                <li className='pointer'>
                    <Link 
                        activeClass='active'
                        to="purposeAndBackground" 
                        spy={true} 
                        smooth={true}
                        offset={-10}
                        duration={2}
                        >
                        Purpose & Background
                    </Link>
                </li>
                <li className='pointer'>
                    <Link 
                        activeClass='active'
                        to="method" 
                        spy={true} 
                        smooth={true}
                        offset={-10}
                        duration={2}
                        >
                        Method
                    </Link>
                </li>
                <li><Link to="Tools" spy={true} smooth={true}>Tools</Link></li>
                <li><Link to="Results" spy={true} smooth={true}>Results</Link></li>
                <li><Link to="Difficulties" spy={true} smooth={true}>Difficulties</Link></li>
            </ul>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' id="purposeAndBackground">Purpose & Background</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    There are two types of a residual tumor; teratoma and necrotic tissue. 
                    Teratoma is malignant and needs to be excised. However, necrotic tissue is benign and a surgery is an overtreatment. 
                    In addition, The conventional biomarker can not identify the teratoma before a surgery.
                    Therefore, we aimed to predict the pathology of postchemotherapy residual tumors using CNN and SVM.
                </p>
                <img src={BackgroundPurpose} className="db ma mv3 w-50 h-50"></img>
                <p className='tl mh2 mv2 f3'>
                    I found two previous studies on the exact same topic.
                    <a className='no-underline b black hover-light-yellow' href='https://ascopubs.org/doi/full/10.1200/CCI.18.00004'> The one </a>
                    is published by Jeremy Lewin, etc. They used SVM and got accuracy: 72.0%, sensitivity: 56.2%, specificity: 81.9% <br />
                    <a className='no-underline b black hover-light-yellow' href='https://link.springer.com/article/10.1007/s00330-019-06495-z?wt_mc=Internal.Event.1.SEM.ArticleAuthorOnlineFirst&utm_source=ArticleAuthorOnlineFirst&utm_medium=email&utm_content=AA_en_06082018&ArticleAuthorOnlineFirst_20191212'> The another one </a>
                    is published by Bettina Baessler, etc. They used Gradient-boosted trees and got accuracy: 81%, sensitivity: 89%, specificity: 72% <br />
                    The purpose of my research is to get a similar or better result of them by ensembling CNN and SVM.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' id="method">Method</div>
            <div className='db ma flex-row tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    We used ensemble model consisting of 3 of SVMs, Resnet50, and Resnet152.<br />
                    First of all, we extract 4608 features from Resnets and get 478 featrues after PCA. After that, we pour them into SVMs.
                    Finally, we ensemble the predictions from 5 models using majority decision. 
                </p>
                <img src={Ensemble} className="db ma mv3 w-50 h-50"></img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' id="Tools">Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {ToolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' id="Results">Results</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    We got a similar result as previous studies; accuracy is 78.3%, sensitivity is 61.3%, and specificity is 90.6%, 
                    which improved comparing to a single Resnet model.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' id="Difficulties">Difficulties</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    ・Lack of CT images: <br/>
                    Testicular cancer is so rare cancer that we can not collect enough data to train a huge CNN model, so we utilize the technique called fine-tunig that uses pre-trained parameters from the model trained with ImageNet.<br/>
                    ・Variety of tumor size: <br/>
                    There are small tumors and big tumors. It is difficult to make tumor images consistent. To deal with this problem, I clipeed all images with 150×150 to cover almost all tumor images.
                </p>
                <p className='tl mh2 mv2 f3'>
                    There's stiil room for investing these two difficulities, so the next research topic is to find better algorithm for these two problems. 
                </p>
            </div>
        </>
    )
}

type ToolProps = {
    name: string;
    description: string;
}

const PytorchProps: ToolProps = {
    name: "Pytorch",
    description: "Pytorch is an open source machine learning framework that accelerates the path from research prototyping to production deployment. It is used for model and dataload.",
}

const NumpyProps: ToolProps = {
    name: "Numpy",
    description: "Numpy is the fundamental package for scientific computing with Python. It is used for handling data.",
}

const PandasProps: ToolProps = {
    name: "Pandas",
    description: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language. It is used for creating a data frame.",
}

const ScikitLearnProps: ToolProps = {
    name: "Scikit-Learn",
    description: "Scikit-Learn is an open source and commercialy usable built on Numpy, Scipy, and Matplotlib, and is simple and efficient tools for predictive data analysis. It is used for mainly SVM ",
}

const MatplotlibProps: ToolProps = {
    name: "Matplotlib",
    description: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. Is is used for ploting a graph",
}

const GitProps: ToolProps = {
    name: "Git",
    description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficient. It is used for tracking changes in code.",
}

const ToolList: Array<ToolProps> = [
    PytorchProps,
    NumpyProps,
    PandasProps,
    ScikitLearnProps,
    MatplotlibProps,
    GitProps,
];
  
function ToolContent({ name, description }: ToolProps): JSX.Element {
    return (
        <div className='dt-row f4'>
            <div className='dtc pv1 w-30 bb br b--white-50'>
                {name}
            </div>
            <div className='tl dtc pv1 ph2 w-70 bb b--white-50'>
                {description}
            </div>
        </div>
    )
} 

function PurposeAndBackground(): JSX.Element {
    return (
        <div id="purpose">
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' id="Purpose & Background">Purpose & Background</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    There are two types of a residual tumor; teratoma and necrotic tissue. 
                    Teratoma is malignant and needs to be excised. However, necrotic tissue is benign and a surgery is an overtreatment. 
                    In addition, The conventional biomarker can not identify the teratoma before a surgery.
                    Therefore, we aimed to predict the pathology of postchemotherapy residual tumors using CNN and SVM.
                </p>
                <img src={BackgroundPurpose} className="db ma mv3 w-50 h-50"></img>
                <p className='tl mh2 mv2 f3'>
                    I found two previous studies on the exact same topic.
                    <a className='no-underline b black hover-light-yellow' href='https://ascopubs.org/doi/full/10.1200/CCI.18.00004'> The one </a>
                    is published by Jeremy Lewin, etc. They used SVM and got accuracy: 72.0%, sensitivity: 56.2%, specificity: 81.9% <br />
                    <a className='no-underline b black hover-light-yellow' href='https://link.springer.com/article/10.1007/s00330-019-06495-z?wt_mc=Internal.Event.1.SEM.ArticleAuthorOnlineFirst&utm_source=ArticleAuthorOnlineFirst&utm_medium=email&utm_content=AA_en_06082018&ArticleAuthorOnlineFirst_20191212'> The another one </a>
                    is published by Bettina Baessler, etc. They used Gradient-boosted trees and got accuracy: 81%, sensitivity: 89%, specificity: 72% <br />
                    The purpose of my research is to get a similar or better result of them by ensembling CNN and SVM.
                </p>
            </div>
        </div>
    )
}