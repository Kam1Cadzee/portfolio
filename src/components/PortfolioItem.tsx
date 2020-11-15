import React, {useState} from 'react';
import Modal from 'react-modal';
import {Carousel} from 'react-responsive-carousel';

interface IPortfolioItemProps {
  item: {
    images: any[],
    title: string,
    logo: any,
    stack: string,
  }
}
const PortfolioItem = ({item}:IPortfolioItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(s => !s);
  };

  return (
    <div className="col-md-4">
      <div className="work-box">
        <a>
          <div className="work-img">
            <img src={item.logo} alt="" className="img-fluid" />
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title">{item.title}</h2>
                <div className="w-more">
                          <span className="w-ctegory">
                            {item.stack}
                          </span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                  <span className="ion-ios-plus-outline"  onClick={toggle}></span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <Modal isOpen={isOpen}
             className={'ReactModal__Content'}
             overlayClassName={'ReactModal__Overlay'}
             onRequestClose={toggle}
      >
        <Carousel showThumbs={false} showStatus={false}>
          {
            item.images.map(img => {
              return (
                <div>
                  <img src={img}/>
                </div>
              )
            })
          }
        </Carousel>
      </Modal>
    </div>
  )
};

export default PortfolioItem;
