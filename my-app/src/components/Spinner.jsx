import loading from '../assets/image/spinnervlll.gif'

const Spinner = () => {
    return ( 
        <div className='flex justify-center '>
            <img src={loading} alt="loading" width={300} />
        </div>
     );
}
 
export default Spinner;