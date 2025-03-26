import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SVMKernelPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4 display-3 font-weight-bold">Deep Dive into Support Vector Machines (SVM) – Kernel Trick</h1>
          <p className="text-center text-muted">An in-depth guide to understanding the Kernel Trick and its applications in SVM</p>
        </div>
      </div>

      <section className="mb-5">
        <h2 className="h3 font-weight-bold">Introduction</h2>
        <p>
          Support Vector Machines (SVM) are one of the most powerful supervised learning algorithms used for classification and regression tasks. A key feature that makes SVMs particularly effective is the Kernel Trick, which allows them to handle non-linearly separable data by transforming it into a higher-dimensional space. This tutorial will explain the Kernel Trick in detail and demonstrate its impact using different SVM kernels.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h3 font-weight-bold">Understanding the Kernel Trick</h2>

        <h4 className="font-weight-bold">1. Why is the Kernel Trick Needed?</h4>
        <p>
          A linear SVM works well when data is linearly separable, meaning it can be divided by a straight line (in 2D) or a hyperplane (in higher dimensions). However, real-world datasets often have complex, non-linear decision boundaries.
          The Kernel Trick allows us to transform such non-linearly separable data into a higher-dimensional space where a linear separator can be applied.
        </p>

        <h4 className="font-weight-bold">2. How Does the Kernel Trick Work?</h4>
        <p>
          Instead of explicitly transforming the data into a higher dimension (which can be computationally expensive), the Kernel Trick computes the dot product in the higher-dimensional space implicitly. 
          This makes it computationally efficient while still allowing the use of linear classifiers in the transformed space. In essence, it allows SVMs to learn from more complex relationships in the data.
        </p>

        <h4 className="font-weight-bold">Common Types of Kernels</h4>
        <ul>
          <li><strong>Linear Kernel:</strong> Suitable for linearly separable data.</li>
          <li><strong>Polynomial Kernel:</strong> Captures more complex relationships.</li>
          <li><strong>RBF Kernel:</strong> Works well with highly non-linear data.</li>
          <li><strong>Sigmoid Kernel:</strong> Similar to neural networks.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 font-weight-bold">Dataset: Breast Cancer Wisconsin (Diagnostic)</h2>
        <p> <strong>Dataset Overview</strong> 
        The dataset consists of 569 samples with 30 numerical features describing cell nuclei characteristics. The target variable is:

        Malignant (M): Represented as 1

        Benign (B): Represented as 0</p>
      </section>

      <section className="mb-5">
        <h2 className="h3 font-weight-bold">Results and Comparison</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Kernel</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Linear</td><td>85%</td></tr>
              <tr><td>Polynomial</td><td>91%</td></tr>
              <tr><td>RBF</td><td>96%</td></tr>
              <tr><td>Sigmoid</td><td>75%</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <h2 className="h3 font-weight-bold">Visualization of Kernel Transformations</h2>
  <p><strong>See how different kernels transform data:</strong></p>
  
  <div className="row text-center">
    <div className="col-md-6">
      <h4>Linear Kernel</h4>
      <img 
        src="https://raw.githubusercontent.com/shubhammane7777/Deep-Dive-into-Support-Vector-Machines-SVM-Kernel-Trick/main/images/linear_kernel.png" 
        alt="Linear Kernel Transformation" 
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-md-6">
      <h4>RBF Kernel</h4>
      <img 
        src="https://raw.githubusercontent.com/shubhammane7777/Deep-Dive-into-Support-Vector-Machines-SVM-Kernel-Trick/main/images/rbf_kernel.png" 
        alt="RBF Kernel Transformation" 
        className="img-fluid rounded shadow-sm"
      />
    </div>
  </div>

      <section className="mb-5">
        <h2 className="h3 font-weight-bold">Conclusion</h2>
        <p>The Kernel Trick is a powerful method in SVMs that allows classification of non-linearly separable data. The choice of the kernel depends on the dataset characteristics:</p>
        <ul>
          <li><strong>Linear Kernel:</strong> Use for simple, linearly separable data.</li>
          <li><strong>Polynomial Kernel:</strong> Use when interactions between features matter.</li>
          <li><strong>RBF Kernel:</strong> Use for complex, real-world datasets.</li>
          <li><strong>Sigmoid Kernel:</strong> Use for mimicking neural network behavior.</li>
        </ul>
      </section>

      <footer className="text-center mt-5 py-4 bg-light">
        <p>&copy; 2025 <strong>Shubham Mane</strong></p>
        <p>
          View the complete code and tutorial on my <a href="https://github.com/shubhammane7777/Deep-Dive-into-Support-Vector-Machines-SVM-Kernel-Trick/tree/main" target="_blank" rel="noopener noreferrer">GitHub repository</a>
        </p>
        <p>References: <a href="https://scikit-learn.org/stable/modules/svm.html" target="_blank" rel="noopener noreferrer">Scikit-Learn</a> | Vladimir Vapnik, "Statistical Learning Theory" (1998) | Andrew Ng’s Machine Learning Course (Stanford)</p>
      </footer>
    </div>
  );
};

export default SVMKernelPage;
