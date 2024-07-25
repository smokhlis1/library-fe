import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from 'react-redux'; 
import { chooseTitle, chooseAuthor, chooseISBN, choosePages, chooseBackCover } from "../redux/slices/RootSlice";

interface BookFormProps {
  id?: string[];
}

interface FormData {
  title: string;
  author: string;
  ISBN: string;
  pages: number;
  back_cover: boolean;
}

const BookForm = (props: BookFormProps) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(`ID: ${props.id}`);
    console.log(data);

    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.title} ${props.id}`);
      setTimeout(() => { window.location.reload() }, 1000);
      reset();
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseISBN(data.ISBN));
      dispatch(choosePages(data.pages));
      dispatch(chooseBackCover(data.back_cover));

      server_calls.create(store.getState());
      setTimeout(() => { window.location.reload() }, 1000);
      reset();
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name="title" placeholder="Title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name="author" placeholder="Author" />
        </div>
        <div>
          <label htmlFor="ISBN">ISBN</label>
          <Input {...register('ISBN')} name="ISBN" placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="pages">Pages</label>
          <Input {...register('pages')} name="pages" placeholder="Pages" />
        </div>
        <div>
          <label htmlFor="back_cover"></label>
          <Input {...register('back_cover')} type="checkbox" name="back_cover" placeholder="Back Cover" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-yellow-800 p-2 rounded hover:bg-yellow-900 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;