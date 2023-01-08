export default function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}