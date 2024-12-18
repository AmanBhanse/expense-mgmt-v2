import { Transactions } from "../transactions";
import { AboutMe } from "../aboutMe";
import { Header } from "../header";
import { SideBar } from "../sidebar";
import { useLocation } from "react-router-dom";

export const Container = () => {
    const location = useLocation(); // Get current route location

    return (
        <section className="overflow-x-hidden vh-100 d-flex flex-column">
            <Header />
            <div className="flex-grow-1">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-2 p-0">
                            <SideBar />
                        </div>
                        <div className="col-10">
                            {location.pathname === '/expense' ? <Transactions /> : 
                             location.pathname === '/about' ? <AboutMe /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
