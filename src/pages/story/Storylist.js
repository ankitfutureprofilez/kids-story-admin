import "../../style/story.css";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReStory from "./ReStroy";
import ImagePrompt from "./ImagePrompt";
import Story from "../../Apis/Story";
import { toast } from 'react-hot-toast';
import { useParams } from "react-router-dom";

function Storylist() {
    const { prompt } = useParams();

  console.log("Prompt value:", prompt);
    const [storyUID, setStoryUID] = useState(null);

    const getStoryUID = (uid) => {
        setStoryUID(uid);
    }
    const navigate = useNavigate();
    const users = useSelector(state => state.users.users);

    console.log("users", users)

    let chaptersdata = [];
    if (users.length < 0) {
        chaptersdata = users.at(-1);
    } else {
        chaptersdata = users[0];
    }

    let extractdata = [];
    if (chaptersdata) {
        extractdata = chaptersdata;
    } else {
        extractdata = chaptersdata && chaptersdata.data;
    }


    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const handleFinal = () => {
        navigate('/card');
    }
    const [Regs, setRegs] = useState({
        "age": extractdata && extractdata.age,
        "title": extractdata && extractdata.title,
        "gender": extractdata && extractdata.gender,
        "genre": extractdata && extractdata.genre,
        "name": extractdata && extractdata.name,
        "stories": extractdata && extractdata.chapters,
    });

    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };


    const [loading, setLoading] = useState(false)
    async function handleForms(e) {
        e.preventDefault();
        setLoading(true);
        const main = new Story();
        try {
            const response = await main.Scheduledate(Regs);
            if (response.data.status) {
                toast.success("Story added successfully.");
                getStoryUID(response.data.data.id);
            } else {
                toast.error("Failed to add story !!");
            }
        } catch (error) {
            console.error("API Error:", error);
            toast.error("An error occurred while adding the story.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content ">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="story-title"><h6> Title :- {extractdata?.title}</h6></div>
                                {extractdata && extractdata.chapters && extractdata.chapters.map((item, key) => (
                                    <div className="story-list" key={key}>
                                        <h2> Chapter {item.chapternumber} :- {item.title} </h2>
                                        <p>{item.content}</p>
                                        {storyUID ? <> <div className="thubnail" >
                                            <ImagePrompt uid={storyUID} chapter={item && item.chapternumber} imageprompt={item.imageprompt}  />
                                        </div></> : <div className="thubnail" >
                                            <p>Please save the story then after show imagePrompt </p></div>}
                                    </div>
                                ))}

                                <div className="btn-list">
                                    {storyUID ?
                                        <button className="btn blue-gradient-btn" onClick={handleFinal}>
                                            <span>Done</span>
                                        </button>
                                        : <>
                                            <button className="btn blue-gradient-btn" onClick={() => handleShows()}>
                                                <span>Regenerate Story</span>
                                            </button>

                                            <div className="btn blue-gradient-btn" onClick={handleForms} >
                                                <span>{loading ? "Adding..." : 'Save'}  </span>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReStory shows={shows} handleCloses={handleCloses}  prompt={prompt} />

                </div>
            </AuthLayout>
        </>
    );
}

export default Storylist;