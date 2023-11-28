
interface HeadingProps {
    title: string;
    text: string;
    }

export default function Heading({ title, text }: HeadingProps) {
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-lg'>{text}</p>
        </div>
    )
}
