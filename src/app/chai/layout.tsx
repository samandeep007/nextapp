//The hierarchy of the layout is as follows:
//The layout we are defining here is parent layout that wraps the page at this route. Although it is wrapping our page and is basically the parent to our page.tsx component, it is still children to the layout file in the app folder.
// App/layout.tsx --> App/chai/layout.tsx --> App/chai/page.tsx || This is the hierarchy of the layout in the app.

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return (
        <>
        {/* <div className="bg-yellow-200 border-pink-900 border-4"> */}
        <h1>inner layout item</h1>
        {children}
        </>
    )
}