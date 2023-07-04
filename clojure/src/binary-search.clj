(defn binary-search [nums target] 
  (let [n (count nums)]
    (loop [left 0 right (dec n)]
      (if (<= left right)
        (let [mid (quot (+ left right) 2) mid-val (nth nums mid)]
          (cond 
            (< mid-val target) (recur (inc mid) right)
            (> mid-val target) (recur left (dec mid))
          :else mid  
            )
          ))
      -1
      )))