import backgroundPurpose from '../../assets/graduation-research-img/background-purpose.png';

/*
    Graduation Research Detail Component  
*/

export function GraduationResearch() {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>Graduation Research</div>
            <div className='mh1 mv3 f3 b dark-gray'>Purpose & Background</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='mh2 mv2 f3'>
                    There are two types of a residual tumor; teratoma and necrotic tissue. 
                    Teratoma is malignant and needs to be excised. However, necrotic tissue is benign and a surgery is an overtreatment. 
                    In addition, The conventional biomarker can not identify the teratoma before a surgery.
                    Therefore, we aimed to predict the pathology of postchemotherapy residual tumors using CNN and SVM.
                </p>
                <img src={backgroundPurpose} className="db ma mv3 w-50 h-50"></img>
                <p className='mh2 mv2 f3'>
                    I found two previous studies on the exact same topic.
                    <a className='no-underline b black hover-light-yellow' href='https://ascopubs.org/doi/full/10.1200/CCI.18.00004'> The one </a>
                    is published by Jeremy Lewin, etc. They used SVM and got accuracy: 72.0%, sensitivity: 56.2%, specificity: 81.9% <br />
                    <a className='no-underline b black hover-light-yellow' href='https://link.springer.com/article/10.1007/s00330-019-06495-z?wt_mc=Internal.Event.1.SEM.ArticleAuthorOnlineFirst&utm_source=ArticleAuthorOnlineFirst&utm_medium=email&utm_content=AA_en_06082018&ArticleAuthorOnlineFirst_20191212'> The another one </a>
                    is published by Bettina Baessler, etc. They used Gradient-boosted trees and got accuracy: 81%, sensitivity: 89%, specificity: 72% <br />
                    The purpose of my research is to get a similar or better result of them by ensembling CNN and SVM.
                </p>
            </div>
            <div className='mh1 mv3 f3 b dark-gray'>Method</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='mh2 mv2 f3'>
                    We used ensemble model consisting of 3 of SVMs, Resnet50, and Resnet152.
                </p>
            </div>
            
        </>
    )
}