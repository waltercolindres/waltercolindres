function Breadcrumbs({ title }) {
  return (
    <>
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="<?= $crumb->url() ?>">{title}</a>
          </li>
          {/* <?php endforeach ?> */}
        </ul>
      </nav>
      <div id="_progress"></div>
    </>
  );
}

export default Breadcrumbs;
