import profilePic from './assets/profile.jpg';
function Card() {
    return(
        <div className="card">
            <img className ="card-image" src ={profilePic} alt="profile picture"></img>
            <h2 className ="card-title">HappyNZ</h2>
            <p className="card-text">I am a student at Open Polytechnic. I like going to the gym and learning to code.</p>
        </div>
    );
}

export default Card;