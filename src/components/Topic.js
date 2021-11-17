// https://github.com/wwayne/react-tooltip
// https://wwayne.github.io/react-tooltip/
import ReactTooltip from "react-tooltip"
import {topics} from '../data/topics'
import {songs} from '../data/songs'

const Topic = () => {

  return (
    <div>
      {/* <a data-tip data-for={songName}>hover over me</a>
      <ReactTooltip id={songName}><a href="" target="_blank">test</a></ReactTooltip> */}
      {topics.JesusChrist.map((t) => {
        return (
          <div>
            <a data-tip data-for={t.topic}>{t.topic}</a>
            <ReactTooltip id={t.topic} delayHide="500" effect="solid" place="right" border="true" textColor="white" clickable="true">
              {t.songs.map((s) => {
                return (
                  <a href={"https://hymnary.org/search?qu=" + songs[s.song]} target="_blank" className="no-underline text-xl">
                    {songs[s.song] + " v" + s.verse}
                  </a>
                )
              })}
            </ReactTooltip>
          </div>
        )
      })}
    </div>
  )
}

export default Topic
