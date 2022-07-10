import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        // console.log(pathname);
        // document.documentElement.scrollTo(0,0);
        // document.documentElement.scrollHeight
        window.scrollTo(0,0);
    }, [pathname]);
    
    return null;
}

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