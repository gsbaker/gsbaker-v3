import GalleryItem from "./component/GalleryItem";

const Photography = () => (
    <div className='photography pt-5 pb-5 text-black'>
        <div className={'container'}>
            <GalleryItem
                image={'bob_and_dave'}
                title={'Bob and Dave'}
            />
            <GalleryItem
                image={'toby'}
                title={'Portrait of Toby Fenton'}
            />
            <GalleryItem
                image={'rajan'}
                title={'Portrait of Rajan Sidhu'}
            />
            <GalleryItem
                image={'petiya'}
                title={'Portrait of Petiya Edwards'}
            />
            <GalleryItem
                image={'evie'}
                title={'Portrait of Evie Baker'}
            />
            <GalleryItem
                image={'tom_mills'}
                title={'Portrait of Tom Mills'}
            />
            <GalleryItem
                image={'sam_moore'}
                title={'Portrait of Sam Moore'}
            />
            <GalleryItem
                image={'patricia_baker'}
                title={'Portrait of Patricia Baker'}
            />
            <GalleryItem
                image={'aber_falls'}
                title={'Aber Falls'}
            />
            <GalleryItem
                image={'old_joe_night'}
                title={'Old Joe'}
            />
            <GalleryItem
                image={'shadow_selfie'}
                title={'Shadow Selfie'}
            />
            <GalleryItem
                image={'at_work'}
                title={'At Work'}
            />
        </div>

    </div>
);

export default Photography