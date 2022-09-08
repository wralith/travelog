interface Props {
  className?: string
  image?: string
  alt?: string
}

function Avatar(props: Props) {
  return (
    <div className={'avatar' + ` ${props.className}`}>
      <div className="w-18 rounded-full">
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  )
}

export default Avatar
