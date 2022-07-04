import loading from '../assets/image/spinnervlll.gif'

const Spinner = () => {
    return ( 
        <div className='flex items-center justify-center'>
            <img src={loading} alt="loading" />
        </div>
     );
}
 
export default Spinner;