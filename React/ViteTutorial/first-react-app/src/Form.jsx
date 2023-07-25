function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted the Form!');
}

export default function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <button>Submit</button>
        </form>
    );
}