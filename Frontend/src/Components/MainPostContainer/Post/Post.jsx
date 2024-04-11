import React from "react";
import { IoImagesOutline } from "react-icons/io5";
import videoImg from "../../../assets/icons/video.png";
import emojiImg from "../../../assets/icons/emoji.jpg";
import ImageImg from "../../../assets/icons/image.png";
import "./post.css";
const Post = ({ image }) => {
    return (
        <div className="post">
            <div className="input-box">
                <img src={image} alt="" className="user-img" />
                <input type="text" className="caption" placeholder="Write somthing" />
            </div>
            <div className="select">
                <div className="icon-box">
                    {/* select image only image  */}
                    <label htmlFor="selectImgUser" className="selector">
                        {/* <img src={ImageImg} className="ImageImg"/> */}
                        <IoImagesOutline className="ImageImg" />
                        <input type="file" name="selectImg" id="selectImgUser" accept="image/*" />
                    </label>

                    <img src={emojiImg} className="selectEmoji" />

                    {/* select video from the user  */}
                    <label htmlFor="upload-video" className="selector">
                        <img src={videoImg} className="videoImg" />
                        <input type="file" accept="video/*" id="upload-video" className="selectVideo" />
                    </label>
                </div>
                <button className="postBtn">Post</button>
            </div>
        </div>
    );
};

export default Post;
