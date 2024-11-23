import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base text-6xl font-semibold text-indigo-950">404</p>
                    <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Sorry, we couldn`t find the page you`re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <Link to="/login" className="text-sm font-semibold text-gray-900">
                            Return to login page <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NotFoundPage;