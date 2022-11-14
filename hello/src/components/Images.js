import image1 from "../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706.png";
import image2 from "../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706.png";
import image3 from "../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e332e706.png";
import image4 from "../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e342e706.png";

function Images() {
  return (
    <>
      <div id="images">
        <div className="image">
          <img src={image1} alt="image1" />
          <h4>BLAAAAA</h4>
          <p>blabl abl ablabl abk l ab lablablablab lablab lablab la bvlabla</p>
        </div>
        <div className="image">
          <img src={image2} alt="image2" />
          <h4>BLAAAAA</h4>
          <p>blabl abl ablabl abk l ab lablablablab lablab lablab la bvlabla</p>
        </div>
        <div className="image">
          <img src={image3} alt="image3" />
          <h4>BLAAAAA</h4>
          <p>blabl abl ablabl abk l ab lablablablab lablab lablab la bvlabla</p>
        </div>
        <div className="image">
          <img src={image4} alt="image4" />
          <h4>BLAAAAA</h4>
          <p>blabl abl ablabl abk l ab lablablablab lablab lablab la bvlabla</p>
        </div>
      </div>
    </>
  );
}

export default Images;
