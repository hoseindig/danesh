const HeaderIcon = () => {
  return (
    <div className="header-box-icons">
      <i className="fa fa-envelope" aria-hidden="true"></i>
      <i className="fa fa-bookmark" aria-hidden="true"></i>
      <i className="fa fa-user" aria-hidden="true"></i>
      {/* <i class="fa fa-bell" aria-hidden="true"></i> */}

      <div className=" fa fa-bell position-relative">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          2<span className="visually-hidden"></span>
        </span>
      </div>
    </div>
  );
};

export default HeaderIcon;
