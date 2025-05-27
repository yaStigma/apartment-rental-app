import CSS from "./Loader.module.css"
export default function Loader() {
    return (
        <div className="fixed inset-0 flex justify-center items-center  bg-opacity-50 z-50">
        <div className={CSS.loader}></div>
        </div>
    );
    
};
