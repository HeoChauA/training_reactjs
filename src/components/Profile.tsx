function Avatar(props: any) {
  return (
    <div className="card">
      <img src={props.avatar} alt={props.title} />
      {props.children ? props.children : "title default"}
    </div>
  );
}

export default function Profile() {
  const props = {
    avatar: "https://i.imgur.com/MK3eW3As.jpg",
    title: "Katherine Johnson"
  };
  
  return (
    <section>
      <h1>Các nhà khoa học tuyệt vời</h1>
      <Avatar {...props}>
        <div className="title">Title is here</div>
      </Avatar>
      <Avatar {...props} />
    </section>
  );
}