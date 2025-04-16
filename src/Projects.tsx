import { useEffect, useState } from "react";
import "./Projects.css";

const data = [
    {
        id: 1,
        projectName: "xpertserv.com",
        github: "https://xpertserv.com",
        description: `ExpertService is a SaaS platform that connects users with experts based on location, 
        including country, state, city, and distance. Users can search for experts and request appointments 
        seamlessly. Experts can sign up, manage customer requests, and utilize task and event management 
        features to streamline their workflow. The platform ensures easy discovery and efficient interaction 
        between users and experts.`
    },
    {
        id: 2,
        projectName: "Keep It - Password Manager and Authenticator",
        github: "https://keepit123.netlify.app/",
        description: "Secure, offline-first password manager and authenticator. Keep sensitive data private, right on your device."
    },
    {
        id: 3,
        projectName: "Video Meeting App",
        github: "https://github.com/Anuragdev03/group_video_call",
        description: "Video calling app like google meet"
    },
    {
        id: 4,
        projectName: "Simple Video App",
        github: "https://github.com/Anuragdev03/video_upload",
        description: "This application enables users to seamlessly upload, view, and stream videos from the server. With a simple and intuitive interface, users can easily manage their video content, which is stored on the server and accessible anytime."
    },
    {
        id: 5,
        projectName: "MyVahan",
        github: "https://github.com/Anuragdev03/MyBike",
        description: "A simple android app to save service record of vehicle."
    },
]

interface Project {
    id: number;
    projectName: string;
    github: string;
    description: string;
}

export default function Projects() {
    const [id, setId] = useState(1);
    const [selectedData, setSelectedData] = useState<Project | null>(null);

    useEffect(() => {
        setData()
    }, [id])

    function setData() {
        let obj = data.find(obj => obj.id === id);
        if (obj) setSelectedData(obj)
    }

    function handleProject(id: number) {
        setId(id);
    }
    return (
        <div style={{ marginTop: "10px" }}>
            <div className="project-grid">
                <div>
                    {data.map(obj => (
                        <>
                            <span
                                onClick={() => handleProject(obj.id)}
                                className='project-name'
                                style={{ opacity: id === obj.id ? 1 : 0.7, fontWeight: id === obj.id ? "bold" : "normal" }}
                            >
                                {obj.projectName}</span>
                            <p />
                        </>
                    ))}
                </div>
                <div>
                    <span className="title">{selectedData?.projectName}</span>
                    <p />
                    <a target="_blank" href={selectedData?.github} style={{ textDecoration: "underline" }}>Github/Link</a>
                    <p>{selectedData?.description}</p>
                </div>
            </div>
        </div>
    )
}