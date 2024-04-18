import Image from "/src/components/Card/CardComponents/Image";
import CardContent from "/src/components/Card/CardComponents/CardContent";

const CardMaker = ({src, content, className = "card_image", contentClass = "card_content"}) => {
    return (
      <div className="card">
        <Image className={className} src={src}/>
        <CardContent className={contentClass} content={content} />
      </div>
    )
};

export default CardMaker;