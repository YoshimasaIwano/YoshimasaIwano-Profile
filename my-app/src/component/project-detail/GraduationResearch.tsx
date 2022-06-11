import background from '../../assets/graduation-research-img/background-purpose.png';

/*
    Graduation Research Detail Component  
*/

export function GraduationResearch() {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>Graduation Research</div>
            <div className='mh1 mv3 f3 b dark-gray'>Purpose & Background</div>
            <div className='flex-row flex-nowrap justify-items-center'>
                <p className='tl mh2 mv2 f3'>
                    There are two types of a residual tumor; teratoma and necrotic tissue. <br/>
                    Teratoma is malignant and needs to be excised. However, necrotic tissue is benign and a surgery is an overtreatment. <br/>
                    In addition, The conventional biomarker can not identify the teratoma before a surgery. <br/>
                    Therefore, we aimed to predict the pathology of postchemotherapy residual tumors using CNN and SVM.
                </p>
                <img src={background} className="db ma mv3 w-50 h-50"></img>
                <p className='tl mh2 mv2 f3'>
                    This is second paragraph
                </p>
            </div>
                
            
        </>
    )
}