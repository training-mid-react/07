
import './style.scss';

interface Props {
  contentTitle: string
}
export const TitleSection = ({contentTitle}: Props) => {

  return (
    <h2 className="title-section">{contentTitle}</h2>
  );
};
