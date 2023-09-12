const Title = ({heading, subHeading} : {heading:string, subHeading: string}) => {
return(
    <div>
    <div className='heading bold'> {heading} </div>
    <div className='sub-heading'> {subHeading} </div>
    </div>
)

}

export default Title