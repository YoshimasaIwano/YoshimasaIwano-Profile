import background from '../../assets/graduation-research-img/background.png';

/*
    Graduation Research Detail Component  
*/

export function GraduationResearch() {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>Graduation Research</div>
            <div className='mh1 mv3 f3 b dark-gray'>Purpose & Background</div>
            <div className='flex-row flex-nowrap justify-items-center'>
                <p className='tc mh2 mv1 f3'>
                    There are two types of 
                </p>
                <img src={background} className="db ma mv1 w-50 h-50"></img>
                <p className='tc mh2 mv1 f3'>
                    This is second paragraph
                </p>
            </div>
                
            
        </>
    )
}