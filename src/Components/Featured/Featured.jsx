import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2203-places-to-visit-in-dublin-1.jpg" alt="dublin" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://imageio.forbes.com/blogs-images/laurabegleybloom/files/2019/05/Capitol-Views-1200x788.jpg?format=jpg&width=960" alt="dublin" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>123 properties</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://content.r9cdn.net/rimg/dimg/97/b0/961eb3a8-city-7128-16764004bcf.jpg?crop=true&width=1366&height=768&xhint=1740&yhint=2462" alt="dublin" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>123 properties</h1>
        </div>
      </div>
    </div>

  )
}

export default Featured
