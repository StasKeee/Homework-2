const Image = (props) => {
    return ( 
        <img src={props.src} className={props.className} alt="Фото" />
     );
}
 
export default Image;