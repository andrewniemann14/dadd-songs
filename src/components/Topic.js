// https://github.com/wwayne/react-tooltip
// https://wwayne.github.io/react-tooltip/
import ReactTooltip from "react-tooltip"
import {songs} from '../data/songs'

const Topic = ({t}) => {

  return (
    <div>
      <div>
        <a data-tip data-for={t.topic}>{t.topic}</a>
        <ReactTooltip id={t.topic} delayHide="350" effect="solid" place="right" border="true" textColor="white" clickable="true">
          {t.songs.map((s) => {
            return (
              <div>
                <a href={"https://hymnary.org/search?qu=" + songs[s.song]} target="_blank" className="no-underline text-xl">
                  {songs[s.song] + (s.verse ? " - v" + s.verse : "")}
                </a>
                <br />
              </div>
            )
          })}
        </ReactTooltip>
      </div>
    </div>
  )
}

export default Topic
