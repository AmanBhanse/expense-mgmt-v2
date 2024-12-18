import { Transactions } from "../transactions";
import { AboutMe } from "../aboutMe";
import { Header } from "../header";
import { SideBar } from "../sidebar";
import { Routes, Route, Navigate } from "react-router-dom"; // Import routing components

export const Container = () => {
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
                            <Routes>
                                {/* Define the routes */}
                                <Route path="/expense" element={<Transactions />} />
                                <Route path="/about" element={<AboutMe />} />
                                {/* Default route */}
                                <Route path="*" element={<Navigate to="/expense" replace />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
