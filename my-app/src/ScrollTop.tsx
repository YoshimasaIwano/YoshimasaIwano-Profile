import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollTop() {
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"});
        }, 100);
    }, [location]);
    
    return null;
}

// export function ScrollToTopButton() {
//     // const element = document.getElementById('top');
//     // console.log(element);
//     // element?.scrollIntoView({block: "start"});

//     setTimeout(() => {
//         window.scrollTo(0,0);
//     }, 500);
    
// }



// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop= (props: React.Component) => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     return <>{props.props.children}</>;
// }

// export default ScrollToTop

// import { useEffect } from "react";
// import { withRouter } from "react-router-dom";

// function ScrollToTop({ history }) {
//     useEffect(() => {
//         const unlisten = history.listen(() => {
//             window.scrollTo(0,0);
//         });
//         return () => {
//             unlisten();
//         }
//     }, []);

//     return null;
// }

// export default withRouter(ScrollToTop);