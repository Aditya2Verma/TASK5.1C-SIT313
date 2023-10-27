import './article.css';

<div class="header">
    <h1>New Post</h1>
    <p>Select Post Type: Question Article</p>
    <p>What Do you want to Ask or Share</p>
</div>

const Ques = () => {
    return (
        <div className='Part'>
            <div className='Part2'>
                <p>Title:</p>
                <input type="text" name='Title' placeholder='Enter Your Question' />
            </div>
            <div className='Part3'>
                <p>Describe Your problem</p>
                <textarea name="area_text" cols="30" rows="10"></textarea>
            </div>
            <div className='Part4'>
                <p>Tags</p>
                <input type="text" placeholder='Enter tags' />
            </div>
            <button>POST</button>
        </div>
    )
}

export default Ques;


