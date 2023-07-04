(defn sum-even-fibonacci [limit]
  (loop [prev 1 curr 2 sum 0] 
    (if (<= curr limit) 
      (let [next (+ prev curr)]
        (if (even? curr) 
          (recur curr next (+ sum curr)) 
          (recur curr next sum))) 
      (sum))))