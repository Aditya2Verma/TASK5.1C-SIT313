import './article.css';

const Article_part = () => {
    return (
        <div className='Part'>
            <div className='Part2'>
                <p>Title:</p>
                <textarea name="area_text" cols="30" rows="2" placeholder='Enter a 1-paragraph '></textarea>
            </div>
            <div className='Part3'>
                <p>Abstract</p>
                <textarea name="area_text" cols="30" rows="2" placeholder='Enter a 1-paragraph '></textarea>
            </div>
            <div className='Part3'>
                <p>Article text</p>
                <textarea name="area_text" cols="30" rows="10" placeholder='Enter a 1-paragraph'></textarea>
            </div>
            <div className='Part4'>
                <p>Tags</p>
                <textarea name="area_text" cols="30" rows="2" placeholder='Add tags (max tags 3)'></textarea>
            </div>
            <button>POST</button>
        </div>
    )
}

export default Article_part;