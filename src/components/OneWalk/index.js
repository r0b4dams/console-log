export default function OneWalk({ walkthrough }) {
    return (
        <div>
            <article className="artOp bg-cover p-1 flex space-x-4 mr-8 rounded-lg" style={{
                backgroundImage: `url("https://media.rawg.io/media/games/3bb/3bb2c8d774c3a83eb2c17d0d3d51f020.jpg")`
            }}>
                <div className="min-w-0 relative flex-auto bg-gray-200 bg-opacity-80 rounded px-1">
                    <h2 className="text-2xl font-semibold text-black mb-0.5 text-left">
                        {walkthrough.title}
                    </h2>
                    <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                        <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 sm:flex xl:flex items-center space-x-1">
                            <dt className="text-amber-500">
                                <span className="sr-only">Rating</span>
                                <svg width="16" height="20" fill="gold">
                                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                </svg>
                            </dt>
                            <dd className="text-2xl">{walkthrough.rating}</dd>
                        </div>
                    </dl>
                </div>
            </article>

            <div>
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <dt className="sr-only">Game Title</dt>
                    <dd className="text-xl">Game: {walkthrough.gameName}</dd>
                </dl>
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <dd className="text-lg">{walkthrough.content}</dd>
                </dl>
            </div>

            <div className="relative">
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <dt className="sr-only">Date</dt>
                    <dd className="text-md">Last Updated: {walkthrough.updated}</dd>
                    <div className="absolute top-0 right-0">
                        <dt className="sr-only">Link</dt>
                        <dd className="text-md">{walkthrough.link}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}