import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../style/Dashboard.css';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState('Weekly');

  const summaryCards = [
    { title: 'Total Orders', value: 75, icon: 'fas fa-box icon-blue', color: 'primary', trend: 'up', trendValue: '3%' },
    { title: 'Total Delivered', value: 70, icon: 'fas fa-truck icon-green', color: 'success', trend: 'down', trendValue: '3%' },
    { title: 'Total Cancelled', value: 5, icon: 'fas fa-times icon-red', color: 'danger', trend: 'up', trendValue: '3%' },
    { title: 'Total Revenue', value: '$12k', icon: 'fas fa-dollar-sign icon-pink', color: 'info', trend: 'down', trendValue: '3%' },
  ];

  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', logo: 'https://via.placeholder.com/40' },
    { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Pending', logo: 'https://via.placeholder.com/40' },
    { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled', logo: 'https://via.placeholder.com/40' },
    { customer: 'Kristin Watson', orderNo: '20967532', amount: '$56.00', status: 'Delivered', logo: 'https://via.placeholder.com/40' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', logo: 'https://via.placeholder.com/40' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', logo: 'https://via.placeholder.com/40' },
  ];

  const feedbacks = [
    { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service...', rating: 5, logo: 'https://via.placeholder.com/40' },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict served on...', rating: 4, logo: 'https://via.placeholder.com/40' },
    { name: 'Devon Lane', feedback: 'Normally ate wings, but theirs are lean...', rating: 4, logo: 'https://via.placeholder.com/40' },
  ];

  const data = {
    labels: Array.from({ length: 24 }, (_, i) => `${i + 1}`),
    datasets: [
      {
        label: 'Activity',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: '#6f42c1', // Purple color
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Activity: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="dashboard container-fluid ml-5">
      <div className="row mt-4">
        <div className="col-12">
          <h1 className="dashboard-title">Dashboard</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {summaryCards.map((card, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className={`card text-white bg-${card.color} h-100`}>
                  <div className="card-body d-flex flex-column align-items-start">
                    <i className={`${card.icon} fa-2x mb-2`}></i>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text d-flex align-items-center">
                      {card.value}
                      <span className={`trend-icon ml-2 ${card.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                        <i className={`fas fa-caret-${card.trend}`}></i> {card.trendValue}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-chart-bar"></i> Activity
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <select className="form-select" value={selectedView} onChange={(e) => setSelectedView(e.target.value)}>
                      <option value="Weekly">Weekly</option>
                    </select>
                  </div>
                </div>
                <div className="card-body">
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-table"></i> Recent Orders
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Customer</th>
                          <th>Order No.</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => (
                          <tr key={index} className={`order-row ${order.status === 'Delivered' ? 'status-delivered' : 'status-other'}`}>
                            <td><img src={order.logo} alt="Customer Logo" className="customer-logo" /></td>
                            <td>{order.customer}</td>
                            <td>{order.orderNo}</td>
                            <td>{order.amount}</td>
                            <td className={`status-label ${order.status.toLowerCase()}`}>{order.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-chart-line"></i> Net Profit
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h1 className="mb-1">$6759.25</h1>
                      <span className="trend-icon text-success"><i className="fas fa-caret-up"></i> 3%</span>
                    </div>
                    <div className="progress-circle">
                      <h2 className="text-center">70%</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-chart-pie"></i> Additional Info
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="additional-info-item">
                      <i className="fas icon fa-check-circle icon-blue"></i>
                      Goals
                      <i className="float-right">{'>'}</i>
                    </li>
                    <li className="additional-info-item">
                      <i className="fas icon fa-chart-line icon-green"></i>
                      Popular Dishes
                      <i className="float-right">{'>'}</i>
                    </li>
                    <li className="additional-info-item">
                      <i className="fas icon fa-users icon-red"></i>
                      Social Media
                      <i className="float-right">{'>'}</i>
                    </li>
                    <li className="additional-info-item">
                      <i className="fas icon fa-box icon-pink"></i>
                      Open Orders
                      <i className="float-right">{'>'}</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-comments"></i> Latest Feedbacks
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {feedbacks.map((feedback, index) => (
                      <li key={index} className="list-group-item">
                        <div className="d-flex align-items-center">
                          <img src={feedback.logo} alt="Customer Logo" className="customer-logo mr-3" />
                          <div>
                            <h6 className="mb-0">{feedback.name}</h6>
                            <small>{feedback.feedback}</small>
                          </div>
                        </div>
                        <div className="text-warning">
                          {[...Array(feedback.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                          {[...Array(5 - feedback.rating)].map((_, i) => (
                            <i key={i} className="far fa-star"></i>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
